const adminPaths2 = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        element: "<AdminDashboard />"
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: "/admin/create-admin",
                element: "<CreateAdmin />"
            },
            {
                name: "Create Faculty",
                path: "/admin/create-faculty",
                element: "<CreateFaculty />"
            },
            {
                name: "Create Student",
                path: "/admin/create-student",
                element: "<CreateStudent />"
            }
        ]
    }
]


const newAdminPaths = adminPaths2.reduce((acc, item) => {
    if (item.path && item.name) {
        acc.push({
            key: item.name,
            label: item.path
        })
    }
    if (item.children) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.children.map(child => ({
                key: child.name,
                label: child.path
            }))
        })
    }
    return acc
}, [])


console.log(JSON.stringify(newAdminPaths));