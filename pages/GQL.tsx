import gql from "graphql-tag";

export const ADD_BUILDING = gql`
mutation AddBuilding($name:String!, $address:String!){
  addBuilding(name:$name, address:$address) {
    name
    address
  }
}
`;

export const EDIT_BUILDING = gql`
mutation EditBuilding($buildingId:String!, $name:String!, $address:String) {
  editBuilding(buildingId:$buildingId, name:$name, address:$address) {
    name
    address
  }
}
`;

export const DEL_BUILDING = gql`
mutation DelBuilding($buildingId:String!) {
  delBuilding(buildingId:$buildingId) {
    name
  }
}
`;

export const BUILDING = gql`
  query Building($buildingId:String!) {
    building(buildingId:$buildingId) {
      id
      name
      address
    }
  }
`;

export const BUILDINGS = gql`
  query {
    buildings {
      id
      name
      address
    }
  }
`;

export const ADD_ROOM = gql`
mutation AddRoom($buildingId:String!, $name:String!, $floor:Int!){
  addRoom(buildingId:$buildingId, name:$name, floor:$floor) {
    name
    floor
  }
}
`;

export const EDIT_ROOM = gql`
mutation EditRoom($buildingId:String!, $roomId:String!, $name:String!, $floor:Int!){
  editRoom(buildingId:$buildingId, roomId:$roomId, name:$name, floor:$floor) {
    name
    floor
  }
}
`;

export const DEL_ROOM = gql`
mutation DelRoom($buildingId:String!, $roomId:String!) {
  delRoom(buildingId:$buildingId, roomId:$roomId) {
    name
  }
}
`;

export const ROOM = gql`
query Room($buildingId:String!, $roomId:String!){
  room(buildingId:$buildingId, roomId:$roomId) {
    name
    floor
  }
}
`;
export const ROOMS = gql`
query Rooms($buildingId:String!){
  rooms(buildingId:$buildingId) {
    name
    floor
  }
}
`;



