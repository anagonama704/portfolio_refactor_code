import React, { useEffect } from "react";
import { Box, Card, CircularProgress } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/work.css";
import { Work } from "../@types";

const Works = () => {
    useEffect(() => {
        getData();
    }, []);

    const [post, setPost] = React.useState<Work[]>([]);
    const [loading, setLoading] = React.useState(true);
    const getData = async () => {
        setLoading(true);
        await axios
            .get("/api/info_wk")
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log("err");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100vh",
                    }}
                >
                    <CircularProgress size={100} />
                </Box>
            ) : (
                <div id="work">
                    <h2>Work</h2>
                    <Slider
                        dots
                        lazyLoad="ondemand"
                        infinite
                        slidesToShow={1}
                        slidesToScroll={1}
                        className="slides"
                        autoplay
                        autoplaySpeed={2000}
                        centerMode
                    >
                        {post.map((postt, index) => {
                            return (
                                <div className="slide_cmp" key={index}>
                                    <Card
                                        id={"" + postt.id}
                                        className="work_cmp"
                                        component="a"
                                        href={
                                            "https://anagonama704.github.io/" +
                                            postt.link
                                        }
                                        target="_blank"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Card id="img_cmp">
                                            <div
                                                style={{
                                                    backgroundImage: `url('/storage/image/${postt.path}')`,
                                                }}
                                                className="work_img"
                                            ></div>
                                        </Card>
                                        <div className="work_p">
                                            <h3>{postt.name}</h3>
                                            <p>{postt.info.award}</p>
                                            <p>{postt.info.infos}</p>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    padding: "10px 0 0 0",
                                                }}
                                            >
                                                <p>制作期間：</p>
                                                <p>
                                                    {postt.info.creation_time}
                                                </p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
            )}
        </>
    );
};
export { Works };
