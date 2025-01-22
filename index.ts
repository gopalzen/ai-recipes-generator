import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}



type EagerModelTodoConnectionModel = {
  readonly items: (Todo | null)[];
  readonly nextToken?: string | null;
}

type LazyModelTodoConnectionModel = {
  readonly items: (Todo | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelTodoConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelTodoConnectionModel : LazyModelTodoConnectionModel

export declare const ModelTodoConnectionModel: (new (init: ModelInit<ModelTodoConnectionModel>) => ModelTodoConnectionModel)

type EagerTodoModel = {
  readonly content?: string | null;
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
}

type LazyTodoModel = {
  readonly content?: string | null;
  readonly createdAt: string;
  readonly id: string;
  readonly updatedAt: string;
}

export declare type TodoModel = LazyLoading extends LazyLoadingDisabled ? EagerTodoModel : LazyTodoModel

export declare const TodoModel: (new (init: ModelInit<TodoModel>) => TodoModel)

const { ModelTodoConnection, Todo } = initSchema(schema) as {
  ModelTodoConnection: PersistentModelConstructor<ModelTodoConnectionModel>;
  Todo: PersistentModelConstructor<TodoModel>;
};

export {
  
};