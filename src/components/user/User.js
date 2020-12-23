export default function User(props) {
    let{item} = props;
    console.log(item);
    return (
        <div>
            {item.id} - {item.name}
        </div>
    )
}