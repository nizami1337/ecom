import "./ProductsSkeleton.scss"

const ProductsSkeleton = () => {
    return (
        <div className="products_skeleton">
            <div className="flex w-64 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-6 w-36"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex justify-between items-center">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-8 w-28"></div>
                </div>
            </div>
            <div className="flex w-64 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-6 w-36"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex justify-between items-center">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-8 w-28"></div>
                </div>
            </div>
            <div className="flex w-64 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-6 w-36"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex justify-between items-center">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-8 w-28"></div>
                </div>
            </div>
            <div className="flex w-64 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-6 w-36"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex justify-between items-center">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-8 w-28"></div>
                </div>
            </div>
        </div>
    )
}

export default ProductsSkeleton