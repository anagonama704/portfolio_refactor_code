import React, { useEffect, useRef } from "react";
import { Box, Card, CircularProgress } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../css/work.css";
import { Work } from "../@types";

const Works = () => {
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = React.useState(0);

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

    const handleThumbnailClick = (index: number) => {
        sliderRef.current?.slickGoTo(index);
        setCurrentSlide(index);
    };

    const handleSlideChange = (index: number) => {
        setCurrentSlide(index);
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
                        ref={sliderRef}
                        dots
                        lazyLoad="ondemand"
                        infinite
                        slidesToShow={1}
                        slidesToScroll={1}
                        className="slides"
                        autoplay
                        autoplaySpeed={2000}
                        centerMode
                        beforeChange={(current: number, next: number) => handleSlideChange(next)}
                    >
                        {post.map((postt: Work, index: number) => {
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
                    
                    {/* サムネイル表示部分 */}
                    <div className="thumbnails-container">
                        {post.map((postt, index) => (
                            <div
                                key={index}
                                className={`thumbnail ${currentSlide === index ? 'active' : ''}`}
                                onClick={() => handleThumbnailClick(index)}
                            >
                                <div
                                    className="thumbnail-img"
                                    style={{
                                        backgroundImage: `url('/storage/image/${postt.path}')`,
                                    }}
                                ></div>
                                <div className="thumbnail-title">{postt.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};
export { Works };
