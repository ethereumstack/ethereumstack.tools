import React from "react";
import { Card, CardHeader, CardContent, Avatar, Typography, Link } from "@material-ui/core";

interface ITool {
  name: string;
  description: string;
  logoUrl: string;
  url: string;
}

interface IProps {
  tools: ITool[];
}

const ToolList: React.FC<IProps> = ({ tools }) => {
  return (
    <>
      {
        tools.map((tool) => (
          <Card elevation={1} key={tool.name} style={{width: "500px", marginBottom: "10px"}}>
            <CardHeader title={tool.name} avatar={
              <Avatar {...{variant: "square"}} alt={tool.name} src={tool.logoUrl}/>
            }/>
            <CardContent>
              <Typography>{tool.description}</Typography>
              <Link href={tool.url}>{tool.url}</Link>
            </CardContent>
          </Card >
        ))
      }
    </>
  );
};

export default ToolList;
