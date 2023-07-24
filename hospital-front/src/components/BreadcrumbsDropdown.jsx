import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Dropdown from "react-bootstrap/Dropdown";

const menuData = [
  {
    title: "약",
    subMenu: ["내복", "외용"],
  },
  {
    title: "주사",
    subMenu: [],
  },
  {
    title: "검사",
    subMenu: ["검사", "병리", "수혈"],
  },
  {
    title: "영상",
    subMenu: ["방사", "초음", "cT", "MR"],
  },
  {
    title: "물리",
    subMenu: [],
  },
  {
    title: "기타",
    subMenu: [],
  },
];

const BreadcrumbsDropdown = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const [selectedSubMenu, setSelectedSubMenu] = useState([]);

  const handleTitleClick = (title) => {
    setSelectedTitle(title);
    setSelectedSubMenu([]);
  };

  const handleSubMenuClick = (subMenu) => {
    setSelectedSubMenu(subMenu);
  };

  return (
    <Breadcrumb>
      <Breadcrumb.Item onClick={() => handleTitleClick(null)}>
        메뉴
      </Breadcrumb.Item>
      {selectedTitle && (
        <Breadcrumb.Item onClick={() => handleTitleClick(selectedTitle)}>
          {selectedTitle}
        </Breadcrumb.Item>
      )}
      {selectedSubMenu.map((item, index) => (
        <Breadcrumb.Item
          key={index}
          onClick={() =>
            handleSubMenuClick(selectedSubMenu.slice(0, index + 1))
          }
        >
          {item}
        </Breadcrumb.Item>
      ))}
      {selectedTitle && (
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {selectedTitle}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {menuData
              .find((item) => item.title === selectedTitle)
              ?.subMenu.map((item, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() =>
                    handleSubMenuClick(
                      menuData
                        .find((item) => item.title === selectedTitle)
                        ?.subMenu.slice(0, index + 1)
                    )
                  }
                >
                  {item}
                </Dropdown.Item>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Breadcrumb>
  );
};

export default BreadcrumbsDropdown;
