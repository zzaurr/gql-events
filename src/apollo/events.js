import { gql } from "@apollo/client";

export   const GET_EVENTS = gql`
query GetEvents {
  event {
    find (params: {filter: {showPast: true}}) {
      id
      title
      startDate
      city {
        titleRu
        country {
          titleRu
        }
      }
    }
  }
  }`;
