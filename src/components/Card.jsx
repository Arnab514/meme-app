import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

function Memecard({img , title}) {
  const navigate = useNavigate()
  
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-46">
          <img src = {img} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick = {(e) => navigate(`/edit?url=${img}`)} >Edit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
export default Memecard