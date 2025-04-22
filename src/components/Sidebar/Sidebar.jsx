import React, { useState } from "react";
import { useCategory } from "../../store/useCategory";
import "./Sidebar.css";

const Sidebar = () => {
  const { categories } = useCategory();
  const [expandedCategories, setExpandedCategories] = useState({});

  const toggleCategory = (categoryId) => {
    setExpandedCategories({
      ...expandedCategories,
      [categoryId]: !expandedCategories[categoryId]
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>카테고리</h3>
      </div>
      <div className="sidebar-content">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <div 
              className="category-title" 
              onClick={() => toggleCategory(category.id)}
            >
              <span>{category.name}</span>
              <span className="toggle-icon">
                {expandedCategories[category.id] ? "+" : "-"}
              </span>
            </div>
            
            <div className={`subcategory-list ${expandedCategories[category.id] ? 'expanded' : ''}`}>
              {category.subCategories && category.subCategories.map((subCategory) => (
                <div key={subCategory.id} className="subcategory-item">
                  <span>{subCategory.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;