export type INode = {
  content: NodeContent,
} & INodeOptions;

export enum NodeType {
  Stylesheet = 'Stylesheet',

}
export type NodeContent = string | (string | INode)[];

export interface INodeOptions {
  type: NodeType,
  content: NodeContent,
  syntax: string,
  start?: number,
  end?: number,
}