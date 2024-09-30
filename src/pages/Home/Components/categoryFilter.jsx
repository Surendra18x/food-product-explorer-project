import "./HomeStyle.css"



export const CategoryFilter = ({Categories,selectedCategory,setSelectedCategory}) => {
    
    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    return(
        <div className="category-filter">
            <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="category-select"
            >
                <option value="">All Categories</option>
                {Categories.map((category) => (
                    <option value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    )

    
}
