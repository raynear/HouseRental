import gql from "graphql-tag";

export const GET_BUILDINGS = gql`
    query {
      buildings {
        id
        name
        address
      }
    }
  `;

export const SET_ROOM = gql`
mutation AddRoom($buildingId:String!, $name:String!, $floor:Int!){
  addRoom(buildingId:$buildingId, name:$name, floor:$floor) {
    name
    floor
  }
}
`;

export const GET_ROOMS = gql`
query Rooms($buildingId:String!){
  rooms(buildingId:$buildingId) {
    name
    floor
  }
}
`;