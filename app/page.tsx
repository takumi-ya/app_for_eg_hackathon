'use client';

import { Clear, Search, Star } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Input,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import { useState } from 'react';

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const items = [
    { id: 1, title: 'Item 1', image: '/path/to/image1.jpg' },
    { id: 2, title: 'Item 2', image: '/path/to/image2.jpg' },
    { id: 3, title: 'Item 3', image: '/path/to/image3.jpg' },
    // 必要に応じてアイテムを追加
  ];

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <Container sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        アイテムリスト
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          endAdornment={
            searchQuery && (
              <InputAdornment position="end">
                <IconButton onClick={handleClearSearch}>
                  <Clear />
                </IconButton>
              </InputAdornment>
            )
          }
          placeholder="Input text"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <Stack spacing={2}>
        {items.map((item) => (
          <Card key={item.id} sx={{ height: 300, display: 'flex', flexDirection: 'column' }}>
            <CardMedia
              component="img"
              sx={{ height: 'calc(100% - 80px)', marginBottom: '10px' }} // 画像の高さをCard全体からCardContentの高さを引いた値に調整
              image={item.image}
              alt={item.title}
            />
            <CardContent sx={{ paddingTop: 0 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="h2" variant="h6">
                  {item.title}
                </Typography>
                <IconButton color="primary">
                  <Star />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
