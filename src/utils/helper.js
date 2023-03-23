// makes our coce
// - reusable - reuse same logic
// - mantainable - error fix
// - testable - separate test cases
// - readable

export function filterData(searchText, restaurants) {
    if (searchText === "") {
        return restaurants;
    }
    return restaurants.filter((restaurant) =>
        restaurant?.data?.name
            ?.toLowerCase()
            ?.includes(searchText?.toLowerCase())
    );
}