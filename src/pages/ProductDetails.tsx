// @ts-nocheck
import {
  Button,
  ButtonGroup,
  Divider,
  Rating,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart, FaTruck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { MdChat, MdCurrencyExchange } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsChatRightText } from "react-icons/bs";

import { useFetchSingleProduct } from "../libs/queries";
import ProductDetailSkleton from "../components/skeletons/ProductDetailSkleton";
import { IProduct, prod } from "../types";
import api from "../redux/api/api";

const ProductDetails: React.FC = () => {
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [product, setProduct] = useState<IProduct | null>(null);
  const [items, setItems] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    const fetch = async () => {
      try {
        const res = await api.get(`/products/${id}`);

        console.log(res.data.product[0]);
        res.status === 404;
        setProduct(res.data.product[0]);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetch();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <ProductDetailSkleton />;
  }

  const handleImageClick = (image: string) => {
    setMainImage(image);
  };

  const isDiscounted = product && product?.discount > 0;
  const discount = product?.discount;

  const discountedAmount = product && (product!.price * product?.discount) / 100;

  const priceAfterDiscount = discountedAmount && product?.price - discountedAmount;

  return (
    <div className="py-6 mx-auto p-3">
      {product && (
        <Stack gap={2} direction={{ xs: "column", sm: "column", md: "row" }}>
          <Stack
            width={{ xs: "90%", sm: "90%", md: "60%" }}
            marginX="auto"
            alignItems="center"
            direction={{
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            }}
            className="rounded-lg"
            gap={2}
          >
            <Stack
              direction={{ xs: "row", sm: "row", md: "column" }}
              gap={2}
              overflow="scroll"
            >
              {product?.images.map((img, index) => (
                <img
                  width={100}
                  height={100}
                  alt="some alt here"
                  src={img}
                  className="rounded-md max-w-[170px] w-[100%] max-h-[100px] h-full"
                  key={index}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </Stack>

            <Stack>
              <img
                width="100%"
                height={400}
                className="rounded-md mx-auto flex-1"
                alt="main prod"
                src={mainImage || product?.images[0]}
                style={{
                  maxWidth: "500px",
                  maxHeight: "500px",
                  objectFit: "contain",
                  minWidth: "100%",
                }}
              />
            </Stack>
          </Stack>
          <Stack
            width={{ xs: "90%", sm: "90%", md: "40%" }}
            className=""
            marginX="auto"
          >
            <Stack gap={4} className="flex-1">
              <Stack>
                <Typography variant="h5">{product?.name}</Typography>
                <div className="flex items-center gap-3 h-[44px]">
                  <div className="flex items-center gap-1 h-[44px]">
                    <Rating value={4} disabled size="small" />
                    <p className="text-[10px] text-[#6085A5]">(56 Reviews)</p>
                    <p className="text-[10px] text-[#6085A5]">
                      (
                      {product?.stockQuantity}
                      {' '}
                      In stock)
                    </p>
                  </div>
                </div>

                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className=""
                >
                  <div className=" flex items-center gap-3 ">
                    {isDiscounted ? (
                      <>
                        <Typography
                          variant="h4"
                          className="text-[24px] text-red-600 font-bold line-through"
                        >
                          $
                          {product?.price}
                        </Typography>
                        <Typography
                          variant="h4"
                          className="text-[24px] font-bold "
                        >
                          $
                          {priceAfterDiscount}
                        </Typography>
                      </>
                    ) : (
                      <Typography
                        variant="h4"
                        className="text-[24px] font-bold"
                      >
                        $
                        {product?.price}
                      </Typography>
                    )}
                  </div>
                  <BsChatRightText size="35px" />
                </Stack>
                {isDiscounted && (
                  <Typography variant="h4" className=" text-red-600">
                    -
                    {' '}
                    {product?.discount}
                    %
                  </Typography>
                )}
              </Stack>
              <Divider />

              <Stack
                direction={{ xs: "column", sm: "row", md: "row" }}
                className="flex justify-between items-center w-[100%]"
              >
                <div className="w-[159px] flex items-center border border-[#808080] rounded-md">
                  <button
                    disabled={items < 1}
                    className={`text-center p-3 flex-1 border-r-[#808080] ${items === product?.stockQuantity ? "hover:-translate-x-4 hover:-translate-y-5 bg-red-600 transition-all duration-300 hover:rounded-bl-md hover:rounded-tl-md" : ""}`}
                    onClick={() => setItems((state) => state - 1)}
                  >
                    -
                  </button>
                  <Divider orientation="vertical" />
                  <p className="px-3 text-center flex-1 p-3">{items}</p>
                  <button
                    className={`bg-[#DB4444] text-white text-center flex-1 p-3 rounded-tr-md rounded-br-md ${items === product?.stockQuantity ? "hover:translate-x-4 hover:translate-y-5 transition-all duration-300 hover:rounded-bl-md hover:rounded-tl-md" : ""}`}
                    disabled={items === product?.stockQuantity}
                    onClick={() => setItems((state) => state + 1)}
                  >
                    +
                  </button>
                </div>
                <button className="text-center px-3 py-2 text-white rounded-md bg-[#DB4444] min-h-[44px] min-w-[165px]">
                  Buy Now
                </button>
                <IoMdHeartEmpty
                  size="40px"
                  className="p-1 rounded-md border border-[#808080]"
                />
              </Stack>

              <div className="border-2 border-[#848484] rounded-md w-[100%]">
                <div className="p-2 flex items-center gap-2">
                  <FaTruck size="30px" />
                  <div>
                    <Typography variant="h6" className="font-bold">
                      Free Delivery
                    </Typography>
                    <p>Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <Divider />
                <div className="p-2 flex items-center gap-2">
                  <MdCurrencyExchange size="30px" />
                  <div>
                    <Typography variant="h6" className="font-bold">
                      Return Delivery
                    </Typography>
                    <p>Free 30 Days Delivery Returns. Details</p>
                  </div>
                </div>
              </div>
            </Stack>
          </Stack>
        </Stack>
      )}
    </div>
  );
};

export default ProductDetails;
