import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { 
  Search, 
  Database, 
  VideoIcon, 
  Users, 
  Copy, 
  Trash2, 
  Edit3,
  FolderOpen,
  Play,
  MoreVertical,
  Upload,
  Settings,
  BarChart3,
  Calendar,
  Clock
} from 'lucide-react';
import { mockData } from '../data/mock';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopyEmbed = (videoName) => {
    const embedCode = `<iframe src="https://thotplay.com/embed/${videoName}" frameborder="0"></iframe>`;
    navigator.clipboard.writeText(embedCode);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ThotPlay</h1>
                <p className="text-sm text-gray-500">Video Management Dashboard</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">API Key</p>
                <p className="text-sm font-mono text-gray-900 bg-gray-100 px-3 py-1 rounded-lg">
                  BxptIEZGo6bGTy4CpHyHrVlt...
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Video List API</p>
                <p className="text-lg font-bold text-gray-900">5</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600 mb-1">Storage Used</p>
                  <p className="text-3xl font-bold text-blue-900">766 GB</p>
                  <p className="text-xs text-blue-500 mt-1">↑ 12% from last month</p>
                </div>
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200 hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-green-600 mb-1">Total Videos</p>
                  <p className="text-3xl font-bold text-green-900">1</p>
                  <p className="text-xs text-green-500 mt-1">1 video uploaded</p>
                </div>
                <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                  <VideoIcon className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-50 to-purple-100 border-purple-200 hover:shadow-md transition-all">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-purple-600 mb-1">Total Users</p>
                  <p className="text-3xl font-bold text-purple-900">4</p>
                  <p className="text-xs text-purple-500 mt-1">Active users</p>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Upload className="w-4 h-4 mr-2" />
                Upload Video
              </Button>
              <Button variant="outline" className="border-gray-300">
                <FolderOpen className="w-4 h-4 mr-2" />
                New Folder
              </Button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search videos and folders..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-80 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Folders Section */}
        <Card className="mb-8 shadow-sm border-gray-200">
          <CardHeader className="bg-gray-50 rounded-t-xl border-b border-gray-200">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                <FolderOpen className="w-5 h-5 mr-2 text-blue-600" />
                Folders
              </CardTitle>
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                1 folder
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {mockData.folders.map((folder) => (
                <div key={folder.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FolderOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{folder.name}</p>
                        <p className="text-sm text-gray-500">{folder.videoCount} videos</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Videos Section */}
        <Card className="shadow-sm border-gray-200">
          <CardHeader className="bg-gray-50 rounded-t-xl border-b border-gray-200">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
                <VideoIcon className="w-5 h-5 mr-2 text-green-600" />
                Videos
              </CardTitle>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                {mockData.videos.length} video{mockData.videos.length !== 1 ? 's' : ''}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-100">
              {mockData.videos.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <VideoIcon className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No videos yet</h3>
                  <p className="text-gray-500 mb-6">Upload your first video to get started with ThotPlay</p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Video
                  </Button>
                </div>
              ) : (
                mockData.videos.map((video) => (
                  <div key={video.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-14 bg-gray-200 rounded-lg overflow-hidden">
                          {video.thumbnail ? (
                            <img 
                              src={video.thumbnail} 
                              alt={video.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <Play className="w-6 h-6 text-gray-400" />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-sm font-medium text-gray-900 truncate">
                              {video.name}
                            </h3>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-gray-500">{video.size}</span>
                              <Badge 
                                variant={video.status === 'active' ? 'default' : 'secondary'}
                                className={video.status === 'active' ? 'bg-green-100 text-green-700' : ''}
                              >
                                {video.status}
                              </Badge>
                              <span className="text-sm text-gray-500 flex items-center">
                                <Calendar className="w-3 h-3 mr-1" />
                                {video.date}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline" className="text-xs">
                                {video.quality}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {video.folder}
                              </Badge>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <Button 
                              size="sm" 
                              className="bg-blue-600 hover:bg-blue-700 text-white"
                            >
                              View Video
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleCopyEmbed(video.name)}
                              className="border-gray-300 hover:bg-gray-50"
                            >
                              <Copy className="w-3 h-3 mr-1" />
                              Copy
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;