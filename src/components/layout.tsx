import * as React from 'react'
import { BgDark, MakeItWide, SpreadItOut } from './layout.css'

interface PropcsWithChildren {
    children: React.ReactNode
}

export const Default: React.FC<PropcsWithChildren> = ({ children }) =>
    <div className={BgDark}>
        <div className={MakeItWide}>
            <div className={SpreadItOut}>
                <div className={MakeItWide}>
                    {children}
                </div>
            </div>
        </div>
    </div>

export default { Default }