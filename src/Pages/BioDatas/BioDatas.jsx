

const BioDatas = () => {
    return (
        <div>
            <div className="flex space-x-4">
    <div className="bg-white overflow-hidden shadow rounded-lg border mx-4 box">
        <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Contact Details
                </h3>
                <button className="text-sm font-medium text-gray-500">
                    Update
                </button>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                The contact information is provided below.
            </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Full name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        John Doe
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        johndoe@example.com
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Phone number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        (123) 456-7890
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Contact Type
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Employee
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Company
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        BoxPower
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Job Title
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Project Engineer
                    </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dt className="text-sm font-medium text-gray-500">
                        Department
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Civil & Electrical
                    </dd>
                </div>
            </dl>
        </div>
    </div>

    <div className="bg-white overflow-hidden shadow rounded-lg border box">
        <div className="px-4 py-5 sm:px-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Assigned Project Sites
                </h3>
                <button className="text-sm font-medium text-gray-500 mx-4">
                    Add
                </button>
            </div>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                You can find the project sites assigned to this contact below.
            </p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        RG 301 <br/>
                        Wahl Ranch
                    </dd>
                    <button className="text-sm font-medium text-gray-500">
                        Remove
                    </button>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        RG 301 <br/>
                        Lagrand Valley
                    </dd>
                    <button className="text-sm font-medium text-gray-500">
                        Remove
                    </button>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        RG 301 <br/>
                        Wahl Ranch
                    </dd>
                    <button className="text-sm font-medium text-gray-500">
                        Remove
                    </button>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        RG 301 <br/>
                        Lagrand Valley
                    </dd>
                    <button className="text-sm font-medium text-gray-500">
                        Remove
                    </button>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        RG 301 <br/>
                        Wahl Ranch
                    </dd>
                    <button className="text-sm font-medium text-gray-500">
                        Remove
                    </button>
                </div>
                
            </dl>
        </div>
    </div>
</div>
        </div>
    );
};

export default BioDatas;