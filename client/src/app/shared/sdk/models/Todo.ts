/* tslint:disable */

declare var Object: any;
export interface TodoInterface {
  "id"?: number;
  "text"?: string;
  "date"?: Date;
}

export class Todo implements TodoInterface {
  "id": number;
  "text": string;
  "date": Date;
  constructor(data?: TodoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Todo`.
   */
  public static getModelName() {
    return "Todo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Todo for dynamic purposes.
  **/
  public static factory(data: TodoInterface): Todo{
    return new Todo(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Todo',
      plural: 'todos',
      path: 'todos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "text": {
          name: 'text',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
      },
      relations: {
      }
    }
  }
}
