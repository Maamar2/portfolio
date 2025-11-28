import React, { useState, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ChevronLeft, Calendar, Tag, Clock } from 'lucide-react';
import { client } from '../client';
import { PortableText } from '@portabletext/react';

const BlogPost = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const query = `*[_type == "post" && slug.current == $slug][0] {
            title,
            publishedAt,
            body,
            tags,
            readTime
        }`;

        client.fetch(query, { slug })
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
            .catch(console.error);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center text-emerald-500 font-mono">
                DECRYPTING_DATA_STREAM...
            </div>
        );
    }

    if (!blog) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* Background Grid Effect */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="relative max-w-4xl mx-auto px-6 py-12">
                <Link to="/blog" className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors font-mono mb-8 group">
                    <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    BACK_TO_LOGS
                </Link>

                <article className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 md:p-12 backdrop-blur-sm">
                    <header className="mb-8 border-b border-slate-800 pb-8">
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-mono mb-4">
                            <span className="flex items-center gap-2">
                                <Calendar size={14} className="text-emerald-500" />
                                {new Date(blog.publishedAt).toLocaleDateString()}
                            </span>
                            {blog.readTime && (
                                <>
                                    <span className="text-slate-700">|</span>
                                    <span className="flex items-center gap-2">
                                        <Clock size={14} className="text-emerald-500" />
                                        {blog.readTime}
                                    </span>
                                </>
                            )}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold text-slate-100 leading-tight mb-6">
                            {blog.title}
                        </h1>
                        <div className="flex flex-wrap gap-2">
                            {blog.tags?.map((tag, i) => (
                                <span key={i} className="flex items-center gap-1 px-3 py-1 bg-slate-800 text-xs text-emerald-400 rounded-full font-mono border border-slate-700">
                                    <Tag size={12} /> {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    <div className="prose prose-invert prose-emerald max-w-none prose-headings:font-bold prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-emerald-400 hover:prose-a:text-emerald-300 prose-code:text-emerald-300 prose-code:bg-slate-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none">
                        <PortableText value={blog.body} />
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
