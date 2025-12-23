    import { createSlice } from "@reduxjs/toolkit"
    import portfolioData from "@data/portfolioData.json"

    // ✅ 초기 상태 - JSON 구조에 맞춤
    const initialState = {
    portfolios: portfolioData.portfolios,  // 배열
    categories: portfolioData.categories,  // 배열
    filteredPortfolios: portfolioData.portfolios,
    selectedCategory: "all",
    searchTerm: "",
    sortBy: "recent",
    }

    const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        setCategory: (state, action) => {
        state.selectedCategory = action.payload
        // 필터링 로직...
        },
        setSearchTerm: (state, action) => {
        state.searchTerm = action.payload
        // 필터링 로직...
        },
        setSortBy: (state, action) => {
        state.sortBy = action.payload
        // 정렬 로직...
        },
    },
    })

    export const { setCategory, setSearchTerm, setSortBy } = portfolioSlice.actions
    export default portfolioSlice.reducer
