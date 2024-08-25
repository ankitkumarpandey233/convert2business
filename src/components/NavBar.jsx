import React from 'react'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 p-3">
            <div className="flex-1">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-5">
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <h2 className="font-litia text-2xl">
                    GOOD MORNING ! DHIRAJ
                </h2>
            </div>
            <div className="flex-none ">
                <button className="btn text-2xl font-bold border border-5 btn-outline">Default</button>
            </div>
        </div>
    )
}

export default NavBar