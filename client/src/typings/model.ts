export abstract class Model {
  async create(): Promise<Model> {
    throw new Error(`Create method for ${typeof this} is not implemented`)
  }

  async delete(): Promise<Model> {
    throw new Error(`Delete method for ${typeof this} is not implemented`)
  }

  async update(): Promise<Model> {
    throw new Error(`Update method for ${typeof this} is not implemented`)
  }

  async load(id?: null | string): Promise<Model> {
    throw new Error(`Load method for ${typeof this} is not implemented`)
  }
}
