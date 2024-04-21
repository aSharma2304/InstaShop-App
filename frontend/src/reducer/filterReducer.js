const filerReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTERED_PRODUCTS":
      return {
        ...state,
        //here we have used copy of the payload so as to not change the original products data
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
      };
    case "GET_SORTED_PRODUCTS":
      let userSortValue = document.getElementById("sort");
      let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sort_value);
      return {
        ...state,
        sortingValue: sort_value,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempData = [...action.payload];

      if (state.sortingValue === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempData.sort(sortingProducts);
      } else if (state.sortingValue === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortData = tempData.sort(sortingProducts);
      } else {
        newSortData = tempData;
      }
      return {
        ...state,
        filterProducts: newSortData,
      };

    default:
      return {
        state,
      };
  }
};
export default filerReducer;
