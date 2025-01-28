export interface NavbarSection {
    path: string
    element: JSX.Element
    children: { name: string, path: string, menubar: boolean, element: JSX.Element }[]
}