export default function Articulo({ params }: { params: { articulo: string } }) {
    const { articulo } = params;
    return (
        <div>
            <h1>{`Articulo no encontrado: ${articulo}`}</h1>
        </div>
    )
}