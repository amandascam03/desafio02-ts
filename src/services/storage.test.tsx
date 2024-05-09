import { changeLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}

describe("storage", () => {

    const mockSetItem = jest.spyOn(Storage.prototype, "setItem")

    it("deve retornar o objeto no localStorage", () => {
        const mockGetItem = jest.spyOn(Storage.prototype, "getItem")
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith("dioBank")
    })

    it("deve criar o objeto no localStorage", () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })

    it("deve alterar o valor do objeto no localStorage", () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('dioBank', JSON.stringify(dioBank))
    })
})