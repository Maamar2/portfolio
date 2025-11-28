import React, { useState, useEffect } from 'react';
import { FileText, Calendar, Tag, ArrowRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { client } from '../client';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "post"] | order(publishedAt desc) {
            title,
            slug,
            publishedAt,
            excerpt,
            tags,
            readTime
        }`;

        client.fetch(query)
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            })
            .catch(console.error);
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-500 font-mono">
                LOADING_SECURE_TRANSMISSIONS...
            </div>
        );
    }

    return (
        <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* Background Grid Effect */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="relative max-w-6xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <Link to="/" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors font-mono mb-6">
                        <ChevronLeft size={16} /> BACK_TO_BASE
                    </Link>
                    <div className="flex items-center gap-4">
                        <FileText className="text-emerald-500" size={32} />
                        <h1 className="text-4xl font-bold font-mono">SECURE_TRANSMISSIONS</h1>
                    </div>
                    <p className="text-slate-400 mt-4 max-w-2xl">
                        Technical logs, security research, and development insights from the field.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all group flex flex-col">
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-3">
                                    <Calendar size={12} />
                                    <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                                    {blog.readTime && (
                                        <>
                                            <span className="text-emerald-500/50">|</span>
                                            <span>{blog.readTime}</span>
                                        </>
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                                    {blog.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                                    {blog.excerpt}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {blog.tags?.map((tag, i) => (
                                        <span key={i} className="flex items-center gap-1 px-2 py-1 bg-slate-800 text-[10px] text-emerald-400/80 rounded font-mono border border-slate-700">
                                            <Tag size={10} /> {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/blog/${blog.slug.current}`} className="w-full mt-auto py-2 bg-slate-800 hover:bg-emerald-600/20 border border-slate-700 hover:border-emerald-500/50 text-slate-300 hover:text-emerald-400 rounded text-sm font-mono transition-all flex items-center justify-center gap-2">
                                    READ_TRANSMISSION <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
