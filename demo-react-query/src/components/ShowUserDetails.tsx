import { ProductDetailsProps } from "../models/Product";
import { useProductDeatilsQuery } from '../utilis/Queries';

const ShowUserDetails = ({ productId }: ProductDetailsProps) => {
	const detailsQuery = useProductDeatilsQuery(productId);
	const { data, isSuccess, isLoading } = detailsQuery;

	if(isLoading) {
		return <h2 className="flex justify-center">Loading....</h2>
	}

	return (
		<div className="flex justify-center">
			<div className="flex flex-col w-2/5 self-start">
				<p>
					<span className="font-bold px-2">Id:</span>
					<span>{data.id}</span>
				</p>
				<p>
					<span className="font-bold px-2">Title:</span>
					<span>{data.title}</span>
				</p>
				<p>
					<span className="font-bold px-2">Description:</span>
					<span>{data.description}</span>
				</p>
				<p>
					<span className="font-bold px-2">Price:</span>
					<span>{data.price}</span>
				</p>
			</div>
		</div>
	)
}

export default ShowUserDetails;