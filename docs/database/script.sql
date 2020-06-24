CREATE TABLE public.note_reference_types (
	id_note_reference_type smallserial NOT NULL,
	note_reference_type varchar(50) NOT NULL,
	CONSTRAINT note_reference_types_pk PRIMARY KEY (id_note_reference_type),
	CONSTRAINT note_reference_types_un UNIQUE (note_reference_type)
);

CREATE TABLE public.tags (
	id_tag serial NOT NULL,
	tag_name varchar NOT NULL,
	CONSTRAINT tags_pk PRIMARY KEY (id_tag),
	CONSTRAINT tags_un UNIQUE (tag_name)
);
CREATE UNIQUE INDEX tags_tag_name_idx ON public.tags USING btree (tag_name);

CREATE TABLE public.users (
	id_user serial NOT NULL,
	username varchar(100) NOT NULL,
	full_name varchar(200) NOT NULL,
	created_at timestamptz NULL DEFAULT now(),
	email varchar(200) NOT NULL,
	"password" varchar(300) NOT NULL,
	CONSTRAINT users_pk PRIMARY KEY (id_user),
	CONSTRAINT users_un UNIQUE (username)
);

CREATE TABLE public.note_groups (
	id_note_group serial NOT NULL,
	group_name varchar(100) NOT NULL,
	id_user int4 NOT NULL,
	CONSTRAINT note_groups_pk PRIMARY KEY (id_note_group),
	CONSTRAINT note_groups_users_fk FOREIGN KEY (id_user) REFERENCES users(id_user)
);
CREATE INDEX note_groups_group_name_idx ON public.note_groups USING btree (group_name);

CREATE TABLE public.note_references (
	id_note_reference serial NOT NULL,
	id_note_reference_type int2 NOT NULL,
	note_reference text NULL,
	CONSTRAINT note_references_pk PRIMARY KEY (id_note_reference),
	CONSTRAINT note_references_un UNIQUE (note_reference),
	CONSTRAINT note_references_fk FOREIGN KEY (id_note_reference_type) REFERENCES note_reference_types(id_note_reference_type)
);

CREATE TABLE public.notes (
	id_note serial NOT NULL,
	id_user int4 NOT NULL,
	"content" text NOT NULL,
	created_at timestamptz NULL DEFAULT now(),
	CONSTRAINT notes_pk PRIMARY KEY (id_note),
	CONSTRAINT notes_fk FOREIGN KEY (id_user) REFERENCES users(id_user)
);

CREATE TABLE public.rel_groups_notes (
	id_note_group int4 NOT NULL,
	id_note int4 NOT NULL,
	created_at timestamptz NOT NULL DEFAULT now(),
	CONSTRAINT rel_groups_notes_un UNIQUE (id_note_group),
	CONSTRAINT rel_groups_notes_fk FOREIGN KEY (id_note_group) REFERENCES note_groups(id_note_group),
	CONSTRAINT rel_groups_notes_fk_1 FOREIGN KEY (id_note) REFERENCES notes(id_note)
);

CREATE TABLE public.rel_notes_note_references (
	id_note int4 NOT NULL,
	id_note_reference int4 NOT NULL,
	create_at timestamptz NOT NULL DEFAULT now(),
	CONSTRAINT rel_notes_references_users_fk FOREIGN KEY (id_note) REFERENCES notes(id_note),
	CONSTRAINT rel_notes_references_users_fk_2 FOREIGN KEY (id_note_reference) REFERENCES note_references(id_note_reference)
);

CREATE TABLE public.rel_notes_tags (
	id_note int4 NOT NULL,
	id_tag int4 NOT NULL,
	created_at timestamp NOT NULL DEFAULT now(),
	CONSTRAINT rel_notes_tags_un UNIQUE (id_note, id_tag),
	CONSTRAINT rel_notes_tags_fk FOREIGN KEY (id_note) REFERENCES notes(id_note),
	CONSTRAINT rel_notes_tags_fk_1 FOREIGN KEY (id_tag) REFERENCES tags(id_tag)
);