"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Users,
  Search,
  Filter,
  Download,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Edit,
  Plus,
  Star,
  MessageSquare
} from "lucide-react";

interface Counselor {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  nationality?: string;
  city?: string;
  verified: boolean;
  role: string;
  specialization?: string;
  experience?: number;
  rating?: number;
  sessionsCompleted?: number;
  bio?: string;
  education?: string;
  languages?: string[];
  hourlyRate?: number;
  availability?: {
    timezone: string;
    slots: Array<{
      day: string;
      startTime: string;
      endTime: string;
    }>;
  };
  createdAt: string;
  updatedAt: string;
}

interface CounselorsResponse {
  counselors: Counselor[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalCount: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export default function AdminCounselorsPage() {
  const [counselors, setCounselors] = useState<Counselor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    hasNext: false,
    hasPrev: false
  });

  const fetchCounselors = async () => {
    try {
      setLoading(true);
      setError(null);

      // Import and use the rich counselor data from mockCounselors
      const { mockCounselors } = await import('@/lib/data/mockCounselors');
      
      // Filter counselors based on search
      let filteredCounselors = mockCounselors;
      if (search) {
        filteredCounselors = mockCounselors.filter(counselor => 
          counselor.firstName.toLowerCase().includes(search.toLowerCase()) ||
          counselor.lastName.toLowerCase().includes(search.toLowerCase()) ||
          counselor.email.toLowerCase().includes(search.toLowerCase()) ||
          counselor.specializations.some(spec => spec.toLowerCase().includes(search.toLowerCase()))
        );
      }
      
      // Filter based on status (using isActive as verified status)
      if (status === 'verified') {
        filteredCounselors = filteredCounselors.filter(c => c.isActive);
      } else if (status === 'unverified') {
        filteredCounselors = filteredCounselors.filter(c => !c.isActive);
      }

      // Convert to expected format with rich counselor data
      const counselorsData = filteredCounselors.map(counselor => ({
        _id: counselor.id,
        firstName: counselor.firstName,
        lastName: counselor.lastName,
        email: counselor.email,
        phoneNumber: undefined,
        nationality: counselor.languages[0], // Use first language as nationality
        city: undefined,
        verified: counselor.isActive,
        role: "COUNSELOR",
        specialization: counselor.specializations[0], // Use first specialization
        experience: counselor.experience,
        rating: counselor.rating,
        sessionsCompleted: counselor.reviewCount, // Use review count as sessions completed
        bio: counselor.bio,
        education: counselor.education,
        languages: counselor.languages,
        hourlyRate: counselor.hourlyRate,
        availability: counselor.availability,
        createdAt: counselor.joinedDate,
        updatedAt: counselor.joinedDate
      }));

      setCounselors(counselorsData);
      setPagination({
        currentPage: 1,
        totalPages: 1,
        totalCount: counselorsData.length,
        hasNext: false,
        hasPrev: false
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch counselors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCounselors();
  }, [search, status]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setStatus(value);
    setCurrentPage(1);
  };

  const getStatusBadge = (counselor: Counselor) => {
    if (counselor.verified) {
      return <Badge className="bg-green-100 text-green-800">Verified</Badge>;
    }
    return <Badge variant="secondary">Pending</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const getRatingStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-3 w-3 fill-yellow-400 text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-3 w-3 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Counselors Management</h1>
          <p className="text-muted-foreground">
            View and manage all counselor accounts
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Counselor
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search counselors by name or email..."
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={status} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Counselors</SelectItem>
                <SelectItem value="verified">Verified</SelectItem>
                <SelectItem value="unverified">Unverified</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Counselors Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Counselors ({pagination.totalCount})
          </CardTitle>
          <CardDescription>
            {loading ? "Loading counselors..." : `Showing ${counselors.length} of ${pagination.totalCount} counselors`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : counselors.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No counselors found</p>
            </div>
          ) : (
            <>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Counselor</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Specialization</TableHead>
                    <TableHead>Languages</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Joined</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {counselors.map((counselor) => (
                    <TableRow key={counselor._id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback>
                              {getInitials(counselor.firstName, counselor.lastName)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">
                              {counselor.firstName} {counselor.lastName}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {counselor.nationality && (
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3 w-3" />
                                  {counselor.nationality}
                                </span>
                              )}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1 text-sm">
                            <Mail className="h-3 w-3" />
                            {counselor.email}
                          </div>
                          {counselor.phoneNumber && (
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Phone className="h-3 w-3" />
                              {counselor.phoneNumber}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">{counselor.specialization}</p>
                          <p className="text-xs text-muted-foreground">
                            {counselor.experience} years experience
                          </p>
                          {counselor.education && (
                            <p className="text-xs text-muted-foreground">
                              {counselor.education}
                            </p>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          {counselor.languages && counselor.languages.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {counselor.languages.slice(0, 2).map((language, index) => (
                                <Badge key={index} variant="outline" className="text-xs">
                                  {language}
                                </Badge>
                              ))}
                              {counselor.languages.length > 2 && (
                                <Badge variant="outline" className="text-xs">
                                  +{counselor.languages.length - 2}
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            {getRatingStars(counselor.rating || 0)}
                            <span className="text-xs text-muted-foreground">
                              {counselor.rating}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MessageSquare className="h-3 w-3" />
                            {counselor.sessionsCompleted} sessions
                          </div>
                          {counselor.hourlyRate && (
                            <div className="text-xs text-muted-foreground">
                              ${counselor.hourlyRate}/hr
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(counselor)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1 text-sm">
                          <Calendar className="h-3 w-3" />
                          {formatDate(counselor.createdAt)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Pagination */}
              <div className="flex items-center justify-between mt-4">
                <p className="text-sm text-muted-foreground">
                  Page {pagination.currentPage} of {pagination.totalPages}
                </p>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage - 1)}
                    disabled={!pagination.hasPrev}
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentPage(currentPage + 1)}
                    disabled={!pagination.hasNext}
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 