import React, { cloneElement, Children } from 'react';
export default ({ children, grouped, onClick }) => (
    <div className={"tabs__buttons" + (grouped ? ' is-grouped' : '')}>
        {
            React.Children.map(children, (child, i) => cloneElement(child, {
                onClick: onClick,
                key: 'tabs__buttons' + i
            }, child.props.children))
        }
    </div>
)