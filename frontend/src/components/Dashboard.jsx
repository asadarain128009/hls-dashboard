import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { 
  Search, 
  Database, 
  VideoIcon, 
  Users, 
  MoreHorizontal, 
  Copy, 
  Trash2, 
  Edit3,
  FolderOpen,
  Calendar
} from 'lucide-react';
import { mockData } from '../data/mock';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [timeFilter, setTimeFilter] = useState('all-time');
  const [perPage, setPerPage] = useState('20');

  const handleCopyEmbed = (videoName) => {
    const embedCode = `<iframe src="https://thotplay.com/embed/${videoName}" frameborder="0"></iframe>`;
    navigator.clipboard.writeText(embedCode);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">ThotPlay Dashboard</h1>
            <p className="text-slate-600">Welcome to ThotChoice Video Player</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-slate-600">API Key</p>
              <p className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">
                BxptIEZGo6bGTy4CpHyHrVlt...
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-slate-600">Video Limit API</p>
              <p className="text-sm font-medium text-slate-900">5</p>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
              P
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Storage Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Storage</CardTitle>
              <Database className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">766 GB</div>
              <div className="h-16 mt-4">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    points="0,35 10,30 20,32 30,25 40,28 50,20 60,22 70,18 80,15 90,12 100,10"
                  />
                  <defs>
                    <linearGradient id="storageGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#storageGradient)"
                    points="0,35 10,30 20,32 30,25 40,28 50,20 60,22 70,18 80,15 90,12 100,10 100,40 0,40"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Total Videos Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Videos</CardTitle>
              <VideoIcon className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">0</div>
              <div className="h-16 mt-4">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#ef4444"
                    strokeWidth="2"
                    points="0,35 10,38 20,36 30,30 40,32 50,28 60,25 70,22 80,20 90,18 100,15"
                  />
                  <defs>
                    <linearGradient id="videosGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ef4444" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#videosGradient)"
                    points="0,35 10,38 20,36 30,30 40,32 50,28 60,25 70,22 80,20 90,18 100,15 100,40 0,40"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Total Users Card */}
          <Card className="bg-white/70 backdrop-blur-sm border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-slate-600">Total Users</CardTitle>
              <Users className="h-4 w-4 text-slate-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-900">4</div>
              <div className="h-16 mt-4">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <polyline
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    points="0,25 10,22 20,18 30,15 40,12 50,10 60,8 70,12 80,10 90,8 100,5"
                  />
                  <defs>
                    <linearGradient id="usersGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.1"/>
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  <polygon
                    fill="url(#usersGradient)"
                    points="0,25 10,22 20,18 30,15 40,12 50,10 60,8 70,12 80,10 90,8 100,5 100,40 0,40"
                  />
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Videos Section */}
        <Card className="bg-white/70 backdrop-blur-sm border-slate-200">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-slate-900">List of Videos</CardTitle>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search videos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/80 border-slate-200"
                />
              </div>
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className="w-32 bg-white/80 border-slate-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="today">Today</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                </SelectContent>
              </Select>
              <Select value={perPage} onValueChange={setPerPage}>
                <SelectTrigger className="w-32 bg-white/80 border-slate-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 per page</SelectItem>
                  <SelectItem value="20">20 per page</SelectItem>
                  <SelectItem value="50">50 per page</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardHeader>
          
          <CardContent className="px-0">
            {/* Folders Section */}
            <div className="px-6 pb-4">
              <div className="flex items-center justify-between mb-4">
                <Badge variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700">
                  <FolderOpen className="w-3 h-3 mr-1" />
                  Folders
                </Badge>
                <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                  + New Folder
                </Button>
              </div>
              
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200">
                    <TableHead className="text-slate-600">Name</TableHead>
                    <TableHead className="text-slate-600">Videos</TableHead>
                    <TableHead className="text-slate-600">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.folders.map((folder) => (
                    <TableRow key={folder.id} className="border-slate-100 hover:bg-slate-50/50">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          <FolderOpen className="h-4 w-4 text-slate-500" />
                          {folder.name}
                        </div>
                      </TableCell>
                      <TableCell>{folder.videoCount}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Videos Section */}
            <div className="px-6 pt-4 border-t border-slate-200">
              <Badge variant="secondary" className="bg-slate-800 text-white hover:bg-slate-700 mb-4">
                <VideoIcon className="w-3 h-3 mr-1" />
                Videos
              </Badge>
              
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200">
                    <TableHead className="text-slate-600">
                      <input type="checkbox" className="rounded border-slate-300" />
                    </TableHead>
                    <TableHead className="text-slate-600">Preview</TableHead>
                    <TableHead className="text-slate-600">Name</TableHead>
                    <TableHead className="text-slate-600">Size</TableHead>
                    <TableHead className="text-slate-600">Status</TableHead>
                    <TableHead className="text-slate-600">Quality</TableHead>
                    <TableHead className="text-slate-600">Folder</TableHead>
                    <TableHead className="text-slate-600">Date</TableHead>
                    <TableHead className="text-slate-600">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.videos.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan="9" className="text-center py-8 text-slate-500">
                        No videos found. Upload your first video to get started!
                      </TableCell>
                    </TableRow>
                  ) : (
                    mockData.videos.map((video) => (
                      <TableRow key={video.id} className="border-slate-100 hover:bg-slate-50/50">
                        <TableCell>
                          <input type="checkbox" className="rounded border-slate-300" />
                        </TableCell>
                        <TableCell>
                          <div className="w-12 h-8 bg-slate-200 rounded flex items-center justify-center">
                            <VideoIcon className="h-4 w-4 text-slate-500" />
                          </div>
                        </TableCell>
                        <TableCell className="font-medium">{video.name}</TableCell>
                        <TableCell>{video.size}</TableCell>
                        <TableCell>
                          <Badge variant={video.status === 'active' ? 'default' : 'secondary'}>
                            {video.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{video.quality}</TableCell>
                        <TableCell>{video.folder}</TableCell>
                        <TableCell className="text-slate-500">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {video.date}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1">
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleCopyEmbed(video.name)}
                              className="hover:bg-blue-50"
                            >
                              <Copy className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hover:bg-slate-50">
                              <Edit3 className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hover:bg-red-50">
                              <Trash2 className="h-3 w-3 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-600">
                  Showing 0 to 0 videos
                </p>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled className="border-slate-200">
                    Previous
                  </Button>
                  <Button variant="outline" size="sm" disabled className="border-slate-200">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Dashboard;