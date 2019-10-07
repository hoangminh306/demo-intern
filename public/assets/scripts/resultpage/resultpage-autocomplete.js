
const autoCompletejs = new autoComplete({
  minChars: 1,
  data: {
    src: function () {
      const data = searchData;
      return data
    },
    key: ["land", "home", "apartment"],
  },
  query: { // Query Interceptor                 | (Optional)
    manipulate: (query) => {
      return query.replace("pizza", "burger");
    }
  },
  sort: (a, b) => { // Sort rendered results ascendingly | (Optional)
    if (a.match < b.match) return -1;
    if (a.match > b.match) return 1;
    return 0;
  },
  placeHolder: "Tìm kiếm", // Place Holder text                 | (Optional)
  selector: "#autoComplete", // Input field selector              | (Optional)
  threshold: 3, // Min. Chars length to start Engine | (Optional)
  debounce: 300, // Post duration for engine to start | (Optional)
  searchEngine: "strict", // Search Engine type/mode           | (Optional)
  resultsList: { // Rendered results list object      | (Optional)
    render: true,
    container: source => {
      resultsListID = "Properties List";
      return resultsListID;
    },
    destination: document.querySelector("#autoComplete"),
    position: "afterend",
    element: "ul"
  },
  maxResults: 5, // Max. number of rendered results | (Optional)
  highlight: true, // Highlight matching results      | (Optional)
  resultItem: { // Rendered result item            | (Optional)
    content: (data, source) => {
      source.innerHTML = data.match;
    },
    element: "li"
  },
  noResults: () => { // Action script on noResults      | (Optional)
    const result = document.createElement("li");
    result.setAttribute("class", "no_result");
    result.setAttribute("tabindex", "1");
    result.innerHTML = "Không tìm thấy kết quả";
    document.querySelector("#autoComplete_results_list").appendChild(result);
  },
  onSelection: feedback => { // Action script onSelection event | (Optional)
    console.log(feedback.selection.value);
  }
}, );