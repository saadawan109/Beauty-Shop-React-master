import { useState, useEffect } from "react";




function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getcategories = () => {
            fetch("https://6667f7c0f53957909ff5f560.mockapi.io/categories").then((res) => {
                return res.json();
            }).then((data) => {
                setCategories(data);
            })
        }

        getcategories();
    }, [])
    return (
        <>
            <section className="mt-5 ">
                <div className="container">
                    <div className="row ">
                        <h2 className="text-center my-5  fs-1">Categories</h2>
                    </div>

                    <div className="row">
                        {
                            categories.map(function (category) {
                                return (
                                    <>
                                        <div className="col-md-3">
                                            <div className="categories ">
                                                <img className="rounded-circle object-fit-cover" src={category.image} alt="" width={200} height={200} />
                                                <h2 className="mt-4 ">{category.title}</h2>
                                            </div>

                                        </div>

                                    </>
                                )
                            })

                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Categories;