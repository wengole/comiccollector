"""
Model behaviors defining common functionality shared between models
"""
import uuid
from django.db import models
from django_extensions.db.fields import CreationDateTimeField, ModificationDateTimeField


class Timestampable(models.Model):
    """
    TimeStampedModel cloned from django-extensions and modified to
    abide by our conventions for date time fields to be appended with _at.
    """
    created_at = CreationDateTimeField()
    modified_at = ModificationDateTimeField()

    def save(self, **kwargs):
        self.update_modified = kwargs.pop('update_modified', getattr(self, 'update_modified', True))
        super().save(**kwargs)

    class Meta:
        get_latest_by = 'modified_at'
        ordering = ('-modified_at', '-created_at',)
        abstract = True


class UUIDable(models.Model):
    """
    Model behaviour to add UUID as PK
    """
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    class Meta():
        abstract = True
