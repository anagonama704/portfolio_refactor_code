import React, { useEffect } from "react";
import { Card } from "@mui/material";
import axios from "axios";

import "../../css/top.css";

const Top = () => {
    type postman = {
        id: number;
        name: string;
        path: string;
        link: string;
    };

    useEffect(() => {
        getData();
    }, []);

    const [post, setPost] = React.useState<postman[]>([]);
    const getData = async () => {
        await axios
            .get("/api/works")
            .then((response) => {
                setPost(response.data);
            })
            .catch(() => {
                console.log("erdssdsdr");
            });
    };

    console.log(post[0]);
    return (
        <div id="top">
            <div id="mainarea">
                <h2>Watanabe Kei</h2>
                <p>HAL NAGOYA</p>
            </div>
            <div id="top_work">
                <div id="compo">
                    {post.map((postt, index) => {
                        return (
                            <Card
                                key={index}
                                id="card_cp"
                                component="a"
                                href={"/portfolio/Work#" + postt.id}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(/storage/image/${postt.path})`,
                                    }}
                                    className="cp_img"
                                ></div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { Top };
