import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { Card } from '@drigofonte_org/base.ui.card';
import styles from './Item.module.scss';

const ItemSkeleton = () => {
  return (
    <Card
      className={styles.itemcard}
    >
      <Box
        p={2}
        flex={'auto'}
        justifyContent="center"
      >
        <Skeleton
          variant="circular"
          animation="wave" 
          sx={{
            width: 60,
            height: 60, 
            margin: 'auto'
          }}
        />
        <Typography variant="h6" sx={{
          mt: 1,
          fontWeight: 700,
          textAlign: 'center'
        }}>
          <Skeleton
            variant="text"
            animation="wave" 
          />
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          minHeight: 60,
          maxHeight: 60
        }}
        justifyContent="center"
        alignItems="Center"
      >
        <Skeleton animation="wave" variant="rectangular" width={75} sx={{ mx: '4px', my: '2px' }} />
        <Skeleton animation="wave" variant="rectangular" width={75} sx={{ mx: '4px', my: '2px' }} />
        <Skeleton animation="wave" variant="rectangular" width={75} sx={{ mx: '4px', my: '2px' }} />
      </Box>
      <Divider light sx={{ mt: 2 }} />
      <Box sx={{ pt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            mt: 3
          }}
        >
          <Skeleton animation="wave" variant="circular" height={30} width={30} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 2
            }}
          >
            <Skeleton animation="wave" variant="text" width={150} />
            <Skeleton animation="wave" variant="text" width={100} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 3
          }}
        >
          <Skeleton animation="wave" variant="circular" height={30} width={30} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 2
            }}
          >
            <Skeleton animation="wave" variant="text" width={150} />
            <Skeleton animation="wave" variant="text" width={100} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 3
          }}
        >
          <Skeleton animation="wave" variant="circular" height={30} width={30} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 2
            }}
          >
            <Skeleton animation="wave" variant="text" width={150} />
            <Skeleton animation="wave" variant="text" width={100} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            mt: 3
          }}
        >
          <Skeleton animation="wave" variant="circular" height={30} width={30} />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              ml: 2
            }}
          >
            <Skeleton animation="wave" variant="text" width={150} />
            <Skeleton animation="wave" variant="text" width={100} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ItemSkeleton;