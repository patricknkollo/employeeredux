import { Image } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

function FooterComponent() {
  return (
    <div>
      <Paper
        sx={{
          marginTop: "calc(10% + 100px)",
          width: "100%",
          position: "fixed",
          bottom: 0,
          height: 120,
          backgroundColor: "lightgray",
          //width: { sm: `calc(100% - ${240}px)` },
        }}
        component="footer"
        square
        variant="outlined"
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              my: 1,
            }}
          >
            <div>
              <Image
                priority
                src="/Logo.svg"
                width={75}
                height={30}
                alt="Logo"
                sx={{ marginTop: 1 }}
              />
            </div>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Georges Leblanc Copyright ©2023. [] Limited
            </Typography>
          </Box>
        </Container>
      </Paper>
    </div>
  );
}
export default FooterComponent;
