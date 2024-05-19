import React, { ReactElement, ReactNode } from 'react';

interface CaseProps {
    children: ReactElement | null;
    condition?: boolean;
}

export const Switch = ({ children }: { children: ReactNode }): ReactElement | null => {
    let matchChild: ReactElement | null = null;
    let defaultCase: ReactElement | null = null;

    React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
            if (!matchChild && child.type === Case) {
                const { condition } = child.props as CaseProps;
                const conditionResult = Boolean(condition);
                if (conditionResult) {
                    matchChild = child;
                }
            } else if (!defaultCase && child.type === Default) {
                defaultCase = child;
            }
        }
    });
    return matchChild ?? defaultCase ?? null;
};

export const Case = ({ children }: CaseProps): ReactElement | null => (children ? children as ReactElement : null);
export const Default = ({ children }: { children: ReactNode }): ReactElement | null => (children ? children as ReactElement : null);
