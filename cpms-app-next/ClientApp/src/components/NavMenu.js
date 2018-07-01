import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavMenu.css';

//TODO: Move this to separate folder.
const MenuData = [
    {
        title: "TRANSACTIONS",
        navItems: [
            { title: "Dashboard", routeTo: "/" },
            { title: "Dispatch", routeTo: "/dispatch" },
            { title: "Return", routeTo: "/return" },
            { title: "Settlement", routeTo: "/settlement" },
        ]
    },
    {
        title: "MASTERS",
        navItems: [
            { title: "Customers", routeTo: "/customers" },
            { title: "Items", routeTo: "/items" },
            { title: "Users", routeTo: "/users" },
        ]
    },
    {
        title: "REPORTS",
        navItems: [
            { title: "Ledger", routeTo: "/ledger-report" },
            { title: "Customers", routeTo: "/customers-report" },
            { title: "Items", routeTo: "/items-report" },
        ]
    }];

export default props => (
<div>
    <div className="sidebar-sticky">
        <MenuItems navGroups={MenuData} />
    </div>
</div>
);

function MenuItems(props) {
    const listItems =
        <div>
            {props.navGroups.map((navGroup) =>
                <div key={navGroup.title}>
                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>{navGroup.title}</span>
                    </h6>
                    <NavItem key={navGroup.title + "_item"} navItems={navGroup.navItems} />
                </div>
            )}
        </div>

    return listItems;
};

function NavItem(props) {
    const menuItem =
        <ul className="nav flex-column">
            {props.navItems.map(navItem =>
                <li key={navItem.title} className="nav-item">
                    <NavLink className="nav-link" to={navItem.routeTo} exact activeClassName="active">{navItem.title}</NavLink>
                </li>
            )}
        </ul>

    return menuItem;
};

