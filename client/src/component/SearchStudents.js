


// import React, { useState, useEffect , useCallback } from 'react';
// import {
//     Container,
//     TextField,
//     Typography,
//     Box,
//     Card,
//     CardContent,
//     Grid,
//     MenuItem,
//     Select,
//     FormControl,
//     InputLabel,
//     Button,
//     CircularProgress
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import RestartAltIcon from '@mui/icons-material/RestartAlt';
// import StudentCard from './StudentCard'; // Ensure this component exists and is correct
// import axios from 'axios';

// const SearchStudents = () => {
//     const [students, setStudents] = useState([]);
//     const [filteredStudents, setFilteredStudents] = useState([]);
//     const [loading, setLoading] = useState(true);

//     const [filters, setFilters] = useState({
//         searchTerm: '',
//         searchField: 'first_name', // default to 'first_name' for search
//         sortBy: 'first_name', // default sort by 'first_name'
//         sortOrder: 'asc', // default order is ascending
//     });

//      const baseUrl =  'https://stdmrkmgmt.onrender.com/'; // Ensure this is set correctly

//     useEffect(() => {
//         // Fetching the student data from API dynamically
//         axios.get(`${baseUrl}api/student`)
//             .then(res => {
//                 setStudents(res.data);
//                 setFilteredStudents(res.data); // Initialize filteredStudents with fetched data
//                 setLoading(false); // Ensure loading state is set to false after fetch
//             })
//             .catch(err => {
//                 console.error('Error fetching students:', err);
//                 setLoading(false); // In case of error, set loading to false
//             });
//     }, [baseUrl]);



//   // Memoize applyFilters to avoid unnecessary re-creations of the function
//   const applyFilters = useCallback(() => {
//     let result = [...students];

//         // Apply search filter
//         if (filters.searchTerm) {
//             result = result.filter((student) => {
//                 const searchValue = student[filters.searchField]?.toString().toLowerCase();
//                 return searchValue?.includes(filters.searchTerm.toLowerCase());
//             });
//         }

//         // Apply sorting
//         result.sort((a, b) => {
//             let valueA = a[filters.sortBy]?.toString().toLowerCase();
//             let valueB = b[filters.sortBy]?.toString().toLowerCase();

//             // Handle case where valueA or valueB might be undefined
//             if (!valueA) valueA = '';
//             if (!valueB) valueB = '';

//             // Ensure numeric sorting works
//             if (!isNaN(valueA) && !isNaN(valueB)) {
//                 valueA = parseFloat(valueA);
//                 valueB = parseFloat(valueB);
//             }

//             if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
//             if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
//             return 0;
//         });

//         setFilteredStudents(result); // Update filtered students
//        }, [students, filters]); // Include students and filters as dependencies


//     useEffect(() => {
//         applyFilters(); // Reapply filters when filters change
//     }, [filters,applyFilters]);

//     const resetFilters = () => {
//         setFilters({
//             searchTerm: '',
//             searchField: 'first_name',
//             sortBy: 'first_name',
//             sortOrder: 'asc',
//         });
//     };

//     // Loading state: return a loading spinner while the data is being fetched
//     if (loading) {
//         return (
//             <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//                 <CircularProgress />
//             </Box>
//         );
//     }

//     return (
//         <Container maxWidth="lg" sx={{ py: 4 }}>
//             <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
//                 Search Students
//             </Typography>

//             {/* Search and Filter Section */}
//             <Card sx={{ mb: 4, p: 2 }}>
//                 <CardContent>
//                     <Grid container spacing={2} alignItems="center">
//                         {/* Search Field */}
//                         <Grid item xs={12} md={4}>
//                             <TextField
//                                 fullWidth
//                                 label="Search"
//                                 value={filters.searchTerm}
//                                 onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
//                                 InputProps={{
//                                     startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />
//                                 }}
//                             />
//                         </Grid>

//                         {/* Search By Dropdown */}
//                         <Grid item xs={12} md={2}>
//                             <FormControl fullWidth>
//                                 <InputLabel>Search By</InputLabel>
//                                 <Select
//                                     value={filters.searchField}
//                                     label="Search By"
//                                     onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
//                                 >
//                                     <MenuItem value="first_name">First Name</MenuItem>
//                                     <MenuItem value="unique_id">Student ID</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Grid>

//                         {/* Sort By Dropdown */}
//                         <Grid item xs={12} md={2}>
//                             <FormControl fullWidth>
//                                 <InputLabel>Sort By</InputLabel>
//                                 <Select
//                                     value={filters.sortBy}
//                                     label="Sort By"
//                                     onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
//                                 >
//                                     <MenuItem value="first_name">First Name</MenuItem>
//                                     <MenuItem value="unique_id">Student ID</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Grid>

//                         {/* Sort Order */}
//                         <Grid item xs={12} md={2}>
//                             <FormControl fullWidth>
//                                 <InputLabel>Order</InputLabel>
//                                 <Select
//                                     value={filters.sortOrder}
//                                     label="Order"
//                                     onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
//                                 >
//                                     <MenuItem value="asc">Ascending</MenuItem>
//                                     <MenuItem value="desc">Descending</MenuItem>
//                                 </Select>
//                             </FormControl>
//                         </Grid>

//                         {/* Reset Button */}
//                         <Grid item xs={12}>
//                             <Box display="flex" justifyContent="center">
//                                 <Button
//                                     variant="outlined"
//                                     startIcon={<RestartAltIcon />}
//                                     onClick={resetFilters}
//                                 >
//                                     Reset Filters
//                                 </Button>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </CardContent>
//             </Card>

//             {/* Results Section */}
//             <Box sx={{ mb: 2 }}>
//                 <Typography variant="body1" color="text.secondary">
//                     Found {filteredStudents.length} students
//                 </Typography>
//             </Box>

//             {/* Student Grid */}
//             <Grid container spacing={3}>
//                 {filteredStudents.map((student) => (
//                     <Grid item xs={12} sm={6} md={4} key={student.unique_id}>
//                         <StudentCard student={student} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };

// export default SearchStudents;


import React, { useState, useEffect, useCallback } from 'react';
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
    CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import StudentCard from './StudentCard'; // Ensure this component exists and is correct
import axios from 'axios';

const SearchStudents = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        searchTerm: '',
        searchField: 'first_name', // default to 'first_name' for search
        sortBy: 'first_name', // default sort by 'first_name'
        sortOrder: 'asc', // default order is ascending
    });

    const baseUrl = 'https://stdmrkmgmt.onrender.com/'; // Ensure this is set correctly

    useEffect(() => {
        // Fetching the student data from API dynamically
        axios
            .get(`${baseUrl}api/student`)
            .then((res) => {
                setStudents(res.data);
                setFilteredStudents(res.data); // Initialize filteredStudents with fetched data
                setLoading(false); // Ensure loading state is set to false after fetch
            })
            .catch((err) => {
                console.error('Error fetching students:', err);
                setLoading(false); // In case of error, set loading to false
            });
    }, [baseUrl]);

    // Memoize applyFilters to avoid unnecessary re-creations of the function
    const applyFilters = useCallback(() => {
        let result = [...students];

        // Apply search filter
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

            // Handle case where valueA or valueB might be undefined
            if (!valueA) valueA = '';
            if (!valueB) valueB = '';

            // Ensure numeric sorting works
            if (!isNaN(valueA) && !isNaN(valueB)) {
                valueA = parseFloat(valueA);
                valueB = parseFloat(valueB);
            }

            if (valueA < valueB) return filters.sortOrder === 'asc' ? -1 : 1;
            if (valueA > valueB) return filters.sortOrder === 'asc' ? 1 : -1;
            return 0;
        });

        setFilteredStudents(result); // Update filtered students
    }, [students, filters]); // Include students and filters as dependencies

    useEffect(() => {
        applyFilters(); // Reapply filters when filters change
    }, [filters, applyFilters]);

    const resetFilters = () => {
        setFilters({
            searchTerm: '',
            searchField: 'first_name',
            sortBy: 'first_name',
            sortOrder: 'asc',
        });
    };

    // Loading state: return a loading spinner while the data is being fetched
    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Container
            maxWidth="lg"
            sx={{
                py: 4,
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #00aaff, #3a2a7d)', // Cool gradient background
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography
                variant="h4"
                component="h1"
                gutterBottom
                align="center"
                color="white"
                sx={{ fontWeight: 700, textShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)' }}
            >
                Search Students
            </Typography>

            {/* Search and Filter Section */}
            <Card sx={{ mb: 4, p: 3, boxShadow: 5, bgcolor: '#2e2e2e', borderRadius: 3, width: '100%' }}>
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
                                    startAdornment: <SearchIcon sx={{ mr: 1, color: '#ffffff' }} />,
                                }}
                                variant="outlined"
                                size="small"
                                sx={{
                                    backgroundColor: '#404040',
                                    '& .MuiOutlinedInput-root': { borderRadius: '8px', borderColor: '#757575' },
                                    color: 'white',
                                }}
                            />
                        </Grid>

                        {/* Search By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth size="small">
                                <InputLabel sx={{ color: '#ffffff' }}>Search By</InputLabel>
                                <Select
                                    value={filters.searchField}
                                    label="Search By"
                                    onChange={(e) => setFilters({ ...filters, searchField: e.target.value })}
                                    sx={{
                                        backgroundColor: '#404040',
                                        borderRadius: '8px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            borderColor: '#757575',
                                        },
                                        color: 'white',
                                    }}
                                >
                                    <MenuItem value="first_name">First Name</MenuItem>
                                    <MenuItem value="unique_id">Student ID</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort By Dropdown */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth size="small">
                                <InputLabel sx={{ color: '#ffffff' }}>Sort By</InputLabel>
                                <Select
                                    value={filters.sortBy}
                                    label="Sort By"
                                    onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
                                    sx={{
                                        backgroundColor: '#404040',
                                        borderRadius: '8px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            borderColor: '#757575',
                                        },
                                        color: 'white',
                                    }}
                                >
                                    <MenuItem value="first_name">First Name</MenuItem>
                                    <MenuItem value="unique_id">Student ID</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        {/* Sort Order */}
                        <Grid item xs={12} md={2}>
                            <FormControl fullWidth size="small">
                                <InputLabel sx={{ color: '#ffffff' }}>Order</InputLabel>
                                <Select
                                    value={filters.sortOrder}
                                    label="Order"
                                    onChange={(e) => setFilters({ ...filters, sortOrder: e.target.value })}
                                    sx={{
                                        backgroundColor: '#404040',
                                        borderRadius: '8px',
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            borderColor: '#757575',
                                        },
                                        color: 'white',
                                    }}
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
                                    variant="contained"
                                    startIcon={<RestartAltIcon />}
                                    onClick={resetFilters}
                                    sx={{
                                        backgroundColor: '#444444',
                                        '&:hover': {
                                            backgroundColor: '#135b7e',
                                        },
                                        color: 'white',
                                        padding: '8px 16px',
                                        borderRadius: '8px',
                                    }}
                                >
                                    Reset Filters
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* Results Section */}
            <Box sx={{ mb: 2, textAlign: 'center' }}>
                <Typography variant="body1" color="white" sx={{ fontWeight: 500 }}>
                    Found {filteredStudents.length} students
                </Typography>
            </Box>

            {/* Student Grid */}
            <Grid container spacing={3}>
                {filteredStudents.map((student) => (
                    <Grid item xs={12} sm={6} md={4} key={student.unique_id}>
                        <StudentCard student={student} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SearchStudents;
