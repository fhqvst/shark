import React, { cloneElement } from 'react';
export default ({ children, onClick }) => (
    <div className="tabs__group">
        {
            React.Children.map(children, (child, i) => cloneElement(child, {
                onClick: onClick,
                key: 'tabs__group' + i
            }, child.props.children))
        }
    </div>
)