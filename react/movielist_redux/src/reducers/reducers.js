import { LOAD_PAGE_CONTENCT, CHANGE_PAGE } from "../actions/types";

const initialState = {
  allMovie: [],
  page: 1,
  visible: false,
  loading: true,
  likedMovies: [],
  blockedMovies: [],
  pageList: [],
  pageMovie: [],
  sortBy: "primary_release_date",
  order: "desc",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PAGE_CONTENCT:
      return {
        ...state,
        allMovie: action.payload,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
