// src/components/SearchBooks.js
import React, { useState, useEffect } from 'react';
import {
    Container,
    TextField,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    CircularProgress
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import BookCard from './BookCard';
import axios from 'axios';

const SearchStudents = () => {
    const [students, setStudents] = useState([]);
    const [filtereStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [publishers, setPublishers] = useState([]);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'first_name',
        sortBy: 'first_name',
        sortOrder: 'asc',
        publisher: 'all'
    });

    useEffect(() => {
        axios.get('/api/student')
            .then(res => {
                setStudents(res.data);
                setFilteredStudents(res.data);
                // Extract unique publishers
                // const uniquePublishers = [...new Set(res.data.map(book => book.publisher))];
                // setPublishers(uniquePublishers);
                // setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching books:', err);
                setLoading(false);
            });
    }, []);

    const applyFilters = () => {
        let result = [...students];

        // Apply search
        if (filters.searchTerm) {
            result = result.filter((student) => {
                const searchValue = student[filters.searchField]?.toString().toLowerCase();
                return searchValue?.includes(filters.searchTerm.toLowerCase());
            });
        }

       

        // Apply sorting
        result.sort((a, b) => {
            let valueA = a[filters.sortBy]?.toString().toLowerCase();
            let valueB = b[filters.sortBy]?.toString().toLowerCase();

           
            if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredStudents(result);
    };

    useEffect(() => {
        applyFilters();
    }, [filters]);

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'first_name',
            sortBy: 'first_name',
            sortOrder: 'asc',
            publisher: 'all'
        });
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
                Search Students
            </Typography>

            {/* Search and Filter Section */}
            <Card sx={{ mb: 4, p: 2 }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        {/* Search Field */}
                        <Grid item xs={12} md={4}>
                            <TextField
                                fullWidth
                                label="Search"
                                value={filters.searchTerm}
                                onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                                InputProps={{
                                    startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
                                }}
                            />
                        </Grid>

                        {/* Search By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Search By</InputLabel>
                                <Select
                                    value={filters.searchField}
                                    label="Search By"
                                    onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                                >
                                    <MenuItem value="first_name">first_name</MenuItem>
                                    <MenuItem value="unique_id">unique_id</MenuItem>
                                  
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Sort By</InputLabel>
                                <Select
                                    value={filters.sortBy}
                                    label="Sort By"
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                >
                                    <MenuItem value="first_name">first_name</MenuItem>
                                    <MenuItem value="unique_id">unique_id</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort Order */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth>
                                <InputLabel>Order</InputLabel>
                                <Select
                                    value={filters.sortOrder}
                                    label="Order"
                                    onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                >
                                    <MenuItem value="asc">Ascending</MenuItem>
                                    <MenuItem value="desc">Descending</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>


                        {/* Reset Button */}
                        <Grid item xs={12}>
                            <Box display="flex" justifyContent="center">
                                <Button
                                    variant="outlined"
                                    startIcon={<RestartAltIcon />}
                                    onClick={resetFilters}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Results Section */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="body1" color="text.secondary">
                    Found {filtereStudents.length} students
                </Typography>
            </Box>

            {/* Books Grid */}
            <Grid container spacing={3}>
                {filteredBooks.map((book) => (
                    <Grid item xs={12} sm={6} md={4} key={book._id}>
                        <BookCard book={book} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchStudents;