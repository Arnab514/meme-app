import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function Memecard({img , title , id}) {
  
  return (
    <div>
      <Card key={id} className="mt-6 w-56">
        <CardHeader color="blue-gray" className="relative h-36">
          <img src = {img} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Link to = {`/edit/${img}`}>
            <Button>Edit</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Memecard
