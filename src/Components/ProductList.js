import { Container, Grid, Paper, Rating, Typography } from "@mui/material";
import React, { Component } from "react";
import axios from "axios";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/products").then((res) => {
      this.setState({ products: res.data });
    });
  }
  render() {
return (
      <Container sx={{ marginY: 15 }}>
        <Typography variant="h5" align="center" marginBottom={5}>
          Shop items and get exciting offers
        </Typography>
        <Grid container spacing={5}>
          {this.state.products &&
            this.state.products.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={3}>
                <Paper>
<img
                    className="img"
                    src="https://americanprofile.com/wp-content/uploads/2013/06/17396956.jpg"
                    alt=""
                  />
                  <Typography sx={{ padding: 1 }} variant="h6">
                    {product.name}
                  </Typography>

<Rating
                    sx={{ padding: 1 }}
                    name="read-only"
                    value={3.5}
                    precision={0.5}
                    size="small"
                    readOnly
                  />
                  <Typography sx={{ padding: 1 }} variant="body2">
                    {product.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Container>
    );
  }
}