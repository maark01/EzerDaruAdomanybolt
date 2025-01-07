export interface NavbarSection {
    children: { name: string, menubar: boolean, path: string, element: JSX.Element }[]
    path: string
    element: JSX.Element
}