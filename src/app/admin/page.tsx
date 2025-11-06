"use client"

import { useState, useEffect } from "react"
import { useAuth, AuthProvider } from "@/components/admin/AuthContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, Plus, Edit, Trash2, Eye } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

function AdminLogin() {
  const { login } = useAuth()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const success = login(username, password)
    if (!success) {
      setError("Invalid credentials. Use admin/vrindavan123")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-saffron/10 via-background to-peacock/10">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-2xl">॥</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
              Vrindavan
            </span>
          </div>
          <CardTitle className="text-2xl">Admin Panel</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="vrindavan123"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full bg-saffron hover:bg-saffron/90">
              Login
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Demo credentials: admin / vrindavan123
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

function AdminDashboard() {
  const { logout } = useAuth()
  const [activeSection, setActiveSection] = useState("carousel")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-saffron to-gold rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">॥</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-saffron to-gold bg-clip-text text-transparent">
                Vrindavan Admin
              </h1>
              <p className="text-xs text-muted-foreground">Content Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="/" target="_blank">
                <Eye className="w-4 h-4 mr-2" />
                Preview Site
              </a>
            </Button>
            <Button variant="destructive" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="carousel" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
            <TabsTrigger value="carousel">Carousel</TabsTrigger>
            <TabsTrigger value="temples">Temples</TabsTrigger>
            <TabsTrigger value="saints">Saints</TabsTrigger>
            <TabsTrigger value="places">Holy Places</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
          </TabsList>

          {/* Carousel Section */}
          <TabsContent value="carousel">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Hero Carousel Slides</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-saffron hover:bg-saffron/90">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Slide
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Add New Carousel Slide</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label>Image URL</Label>
                        <Input placeholder="https://..." />
                      </div>
                      <div>
                        <Label>Title</Label>
                        <Input placeholder="Main heading" />
                      </div>
                      <div>
                        <Label>Subtitle</Label>
                        <Input placeholder="Subheading" />
                      </div>
                      <div>
                        <Label>Description</Label>
                        <Textarea placeholder="Description text" />
                      </div>
                      <Button className="w-full bg-saffron hover:bg-saffron/90">Save Slide</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border rounded-lg hover:border-saffron/50 transition-colors">
                      <img
                        src={`https://images.unsplash.com/photo-${i === 1 ? '1564507592333-c60657eea523' : i === 2 ? '1582649509022-6d4d6bfa0d47' : '1548013146-72479768bada'}?w=200&h=120&fit=crop`}
                        alt="Slide"
                        className="w-32 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">Slide {i}</h4>
                        <p className="text-sm text-muted-foreground">Hero carousel slide</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Temples Section */}
          <TabsContent value="temples">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Temple Management</CardTitle>
                <Button className="bg-saffron hover:bg-saffron/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Temple
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {["Banke Bihari Temple", "ISKCON Temple", "Prem Mandir"].map((temple, i) => (
                    <Card key={i} className="overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${i === 0 ? '1582649509022-6d4d6bfa0d47' : i === 1 ? '1564507592333-c60657eea523' : '1548013146-72479768bada'}?w=400&h=300&fit=crop`}
                        alt={temple}
                        className="w-full h-40 object-cover"
                      />
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{temple}</h4>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Saints Section */}
          <TabsContent value="saints">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Saints Management</CardTitle>
                <Button className="bg-saffron hover:bg-saffron/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Saint
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Chaitanya Mahaprabhu", "Swami Haridas", "Mirabai"].map((saint, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 border rounded-lg">
                      <img
                        src={`https://images.unsplash.com/photo-${i === 0 ? '1507003211169-0a1dd7228f2d' : i === 1 ? '1609743522653-52354461eb27' : '1609743522471-83c84ce23e32'}?w=80&h=80&fit=crop`}
                        alt={saint}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{saint}</h4>
                        <p className="text-sm text-muted-foreground">Historical saint</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Holy Places Section */}
          <TabsContent value="places">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Holy Places Management</CardTitle>
                <Button className="bg-saffron hover:bg-saffron/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Place
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Yamuna River", "Govardhan Hill", "Nidhivan"].map((place, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">{place}</h4>
                        <p className="text-sm text-muted-foreground mb-4">Sacred location</p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button variant="destructive" size="sm">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Section */}
          <TabsContent value="testimonials">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Testimonials Management</CardTitle>
                <Button className="bg-saffron hover:bg-saffron/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Testimonial
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Priya Sharma", "David Miller", "Anjali Patel"].map((name, i) => (
                    <Card key={i}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <img
                            src={`https://images.unsplash.com/photo-${i === 0 ? '1494790108377-be9c29b29330' : i === 1 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?w=60&h=60&fit=crop`}
                            alt={name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold">{name}</h4>
                            <p className="text-sm text-muted-foreground">★★★★★ Excellent experience</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button variant="destructive" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Gallery Section */}
          <TabsContent value="gallery">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Gallery Management</CardTitle>
                <Button className="bg-saffron hover:bg-saffron/90">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Image
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div key={i} className="relative group">
                      <img
                        src={`https://images.unsplash.com/photo-${i % 2 === 0 ? '1582649509022-6d4d6bfa0d47' : '1564507592333-c60657eea523'}?w=300&h=300&fit=crop`}
                        alt="Gallery"
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-2">
                        <Button variant="secondary" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="destructive" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function AdminPageContent() {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <AdminDashboard /> : <AdminLogin />
}

export default function AdminPage() {
  return (
    <AuthProvider>
      <AdminPageContent />
    </AuthProvider>
  )
}
