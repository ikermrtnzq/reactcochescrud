import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <div className="w-full">
                <nav className="bg-slate-900 px-6 py-4 shadow-lg">
                    <ul className="flex items-center justify-center gap-8">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/update"
                                className={({ isActive }) =>
                                    `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`
                                }
                            >
                                Update
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/insert"
                                className={({ isActive }) =>
                                    `rounded-md px-4 py-2 font-medium transition-colors duration-200 ${
                                        isActive
                                            ? 'bg-blue-600 text-white'
                                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                    }`
                                }
                            >
                                Insert
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
